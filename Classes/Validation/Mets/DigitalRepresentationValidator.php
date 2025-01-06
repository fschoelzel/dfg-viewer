<?php

namespace Slub\Dfgviewer\Validation\Mets;

use Slub\Dfgviewer\Common\ValidationHelper;
use Slub\Dfgviewer\Validation\DOMDocumentValidator;

/**
 * Copyright notice
 *
 * (c) Saxon State and University Library Dresden <typo3@slub-dresden.de>
 * All rights reserved
 *
 * This script is part of the TYPO3 project. The TYPO3 project is
 * free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 *
 * This script is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This copyright notice MUST APPEAR in all copies of the script!
 */

/**
 * The validator validates against the rules outlined in chapter 2.4 of the METS application profile 2.3.1.
 *
 * @package TYPO3
 * @subpackage dfg-viewer
 *
 * @access public
 */
class DigitalRepresentationValidator extends DOMDocumentValidator
{
    public function isValidDocument(): void
    {
        // Validates against the rules of chapter "2.4.1 Dateisektion – mets:fileSec"
        $this->createNodeListValidator(ValidationHelper::XPATH_FILE_SECTIONS)
            ->validateHasNoneOrOne();

        // If a physical structure is present, there must be one file section.
        if($this->xpath->query(ValidationHelper::XPATH_PHYSICAL_STRUCTURES)->length > 0){
            $this->createNodeListValidator(ValidationHelper::XPATH_FILE_SECTIONS)
                ->validateHasOne();
        }

        if ($this->xpath->query(ValidationHelper::XPATH_FILE_SECTIONS)->length > 0) {
            $this->validateFileGroups();
            $this->validateFiles();
        }
    }

    /**
     * Validates the file groups.
     *
     * Validates against the rules of chapter "2.4.2.1 Dateigruppen – mets:fileGrp"
     *
     * @return void
     */
    public function validateFileGroups(): void
    {
        $this->createNodeListValidator(ValidationHelper::XPATH_FILE_SECTION_GROUPS)
            ->validateHasAny()
            ->iterate(array($this, "validateFileGroup"));

        $this->createNodeListValidator(ValidationHelper::XPATH_FILE_SECTION_GROUPS . '[@USE="DEFAULT"]')
            ->validateHasOne();
    }

    public function validateFileGroup(\DOMNode $fileGroup): void
    {
        $this->createNodeValidator($fileGroup)
            ->validateHasUniqueAttribute("USE", ValidationHelper::XPATH_FILE_SECTION_GROUPS);
    }

    /**
     * Validates the files.
     *
     * Validates against the rules of chapters "2.4.2.2 Datei – mets:fileGrp/mets:file" and "2.4.2.3 Dateilink – mets:fileGrp/mets:file/mets:FLocat"
     *
     * @return void
     */
    public function validateFiles(): void
    {
        $this->createNodeListValidator(ValidationHelper::XPATH_FILE_SECTION_FILES)
            ->validateHasAny()
            ->iterate(array($this, "validateFile"));
    }

    public function validateFile(\DOMNode $file): void
    {
        $this->createNodeValidator($file)
            ->validateHasUniqueId()
            ->validateHasAttribute('MIMETYPE');

        $fLocat = $this->createNodeListValidator('mets:FLocat', $file)
            ->validateHasOne()
            ->getFirstNode();

        $this->createNodeValidator($fLocat)
            ->validateHasAttributeWithValue('LOCTYPE', array('URL', 'PURL'))
            ->validateHasAttributeWithUrl('xlink:href');
    }
}
