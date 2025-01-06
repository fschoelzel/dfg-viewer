<?php

declare(strict_types=1);

namespace Slub\Dfgviewer\Validation;

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

use Kitodo\Dlf\Validation\AbstractDlfValidationStack;
use Slub\Dfgviewer\Validation\Mets\AdministrativeMetadataValidator;
use Slub\Dfgviewer\Validation\Mets\DescriptiveMetadataValidator;
use Slub\Dfgviewer\Validation\Mets\DigitalRepresentationValidator;
use Slub\Dfgviewer\Validation\Mets\LinkingLogicalPhysicalStructureValidator;
use Slub\Dfgviewer\Validation\Mets\LogicalStructureValidator;
use Slub\Dfgviewer\Validation\Mets\PhysicalStructureValidator;

class MetsApplicationProfileValidationStack extends AbstractDlfValidationStack {
    public function __construct(array $options = [])
    {
        parent::__construct(\DOMDocument::class);

        $this->addValidator(LogicalStructureValidator::class, "Specifications for the logical document structure", false);
        $this->addValidator(PhysicalStructureValidator::class, "Specifications for the physical document structure", false);
        $this->addValidator(LinkingLogicalPhysicalStructureValidator::class, "Specifications for the physical document structure", false);
        $this->addValidator(DigitalRepresentationValidator::class, "Specifications for the physical document structure", false);
        $this->addValidator(DescriptiveMetadataValidator::class, "Descriptive metadata", false);
        $this->addValidator(AdministrativeMetadataValidator::class, "Administrative metadata", false);
        $this->addValidator(DVMetadataValidator::class, "DFG-Viewer specific informations", false);
    }
}
