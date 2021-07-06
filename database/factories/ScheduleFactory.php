<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Schedule;
use Faker\Generator as Faker;

$factory->define(Schedule::class, function (Faker $faker) {

    return [
        'name' => $faker->name,
        'start' => $faker->dateTimeBetween('-5 days', 'now'),
        'end' => $faker->dateTimeBetween('now', '+5 days'),
    ];
});
