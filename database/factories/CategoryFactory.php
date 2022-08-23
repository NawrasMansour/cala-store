<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
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
            'picture' => $this->faker->imageUrl(640,480),
            'description' => $this->faker->text,
        ];
    }
}
