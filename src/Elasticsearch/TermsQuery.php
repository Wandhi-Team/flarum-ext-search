<?php

namespace Blomstra\Search\Elasticsearch;

use Spatie\ElasticsearchQueryBuilder\Queries\Query;

class TermsQuery implements Query
{
    protected string $field;

    protected array $values;

    public static function create(string $field, array $values): TermsQuery
    {
        return new self($field, $values);
    }

    public function __construct(string $field, array $values)
    {
        $this->field = $field;
        $this->values = $values;
    }

    public function toArray(): array
    {
        return [
            'terms' => [
                $this->field => $this->values,
            ],
        ];
    }
}
