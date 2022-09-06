<?php

namespace Blomstra\Search\Jobs;

use Blomstra\Search\Seeders\Seeder;
use Flarum\Queue\AbstractJob;
use Illuminate\Support\Collection;

abstract class Job extends AbstractJob
{
    protected string $index;

    public static ?string $onQueue = null;
    protected Collection $models;
    protected Seeder $seeder;

    public function __construct(Collection $models, Seeder $seeder)
    {
        $this->seeder = $seeder;
        $this->models = $models;
        $this->index  = resolve('blomstra.search.elastic_index');

        if (static::$onQueue) $this->onQueue(static::$onQueue);
    }
}
