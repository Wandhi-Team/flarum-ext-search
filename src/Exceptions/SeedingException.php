<?php

namespace Blomstra\Search\Exceptions;

use Throwable;

class SeedingException extends \Exception
{

    public array $items;

    public function __construct($message = "", array $items, $code = 0, Throwable $previous = null)
    {
        $this->items = $items;
        parent::__construct($message, $code, $previous);
    }
}
