<?php

namespace Slub\Dfgviewer\Validation;

use DOMNode;
use DOMXPath;
use TYPO3\CMS\Extbase\Error\Error;
use TYPO3\CMS\Extbase\Error\Result;

class DOMNodeValidator
{
    protected DOMXPath $xpath;

    public function __construct(DOMXPath $xpath, Result $result, ?DOMNode $node)
    {
        $this->xpath = $xpath;
        $this->result = $result;
        $this->node = $node;
    }

    public function validateHasAttributeWithUrl(string $name): DOMNodeValidator
    {
        if (!isset($this->node)) {
            return $this;
        }

        if (!$this->node->hasAttribute($name)) {
            return $this->validateHasAttribute($name);
        }

        $value = $this->node->getAttribute($name);
        if (!filter_var($value, FILTER_VALIDATE_URL)) {
            $this->result->addError(new Error('URL "' . $value . '" in the "' . $name . '" attribute of "' . $this->node->getNodePath() . '" is not valid.', 1724234607));
        }

        return $this;
    }

    public function validateHasAttributeWithValue(string $name, array $values): DOMNodeValidator
    {
        if (!isset($this->node)) {
            return $this;
        }

        if (!$this->node->hasAttribute($name)) {
            return $this->validateHasAttribute($name);
        }

        $value = $this->node->getAttribute($name);
        if (!in_array($value, $values)) {
            $this->result->addError(new Error('Value "' . $value . '" in the "' . $name . '" attribute of "' . $this->node->getNodePath() . '" is not permissible.', 1724234607));
        }

        return $this;
    }

    public function validateHasUniqueAttribute(string $name, string $contextExpression): DOMNodeValidator
    {
        if (!isset($this->node)) {
            return $this;
        }

        if (!$this->node->hasAttribute($name)) {
            return $this->validateHasAttribute($name);
        }

        $value = $this->node->getAttribute($name);
        if ($this->xpath->query($contextExpression . '[@' . $name . '="' . $value . '"]')->length > 1) {
            $this->result->addError(new Error('"' . $name . '" attribute with value "' . $value . '" of "' . $this->node->getNodePath() . '" already exists.', 1724234607));
        }

        return $this;
    }

    public function validateHasUniqueId(): DOMNodeValidator
    {
        $this->validateHasUniqueAttribute("ID", "//*");
        return $this;
    }

    public function validateHasAttribute(string $name): DOMNodeValidator
    {
        if (!isset($this->node)) {
            return $this;
        }

        if (!$this->node->hasAttribute($name)) {
            $this->result->addError(new Error('Mandatory "' . $name . '" attribute of "' . $this->node->getNodePath() . '" is missing.', 1724234607));
        }
        return $this;
    }

    public function validateHasReferenceToId(string $name, string $targetContextExpression): DOMNodeValidator
    {
        if (!isset($this->node)) {
            return $this;
        }

        if (!$this->node->hasAttribute($name)) {
            return $this->validateHasAttribute($name);
        }

        $targetNodes = $this->xpath->query($targetContextExpression);
        $id = $this->node->getAttribute($name);

        $foundElements = 0;
        foreach ($targetNodes as $targetNode) {
            $foundElements += $this->xpath->query('//*[@ID="' . $id . '"]', $targetNode)->length;
        }

        if ($foundElements !== 1) {
            $this->result->addError(new Error('Value "' . $id . '" in the "' . $name . '" attribute of "' . $this->node->getNodePath() . '" must reference one element under XPath expression "' . $targetContextExpression, 1724234607));
        }

        return $this;
    }

}
