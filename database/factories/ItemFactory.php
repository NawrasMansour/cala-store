<?php

namespace Database\Factories;

use App\Models\SubGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'en_name' => $this->faker->name(),
            'ar_name' => $this->faker->name(),
            //'picture' => $this->faker->image('public/storage/images',640,480, null, false),
            'price' => $this->faker->randomDigit,
            'description' => $this->faker->text,
            'sub_group_id' => function () {
                return SubGroup::inRandomOrder()->first()->id;
            },
        ];
    }
}
//randomFloat(2, 0, 10000)