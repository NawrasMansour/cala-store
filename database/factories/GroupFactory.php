<?php

namespace Database\Factories;

use App\Models\SubCluster;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Group>
 */
class GroupFactory extends Factory
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
            'sub_cluster_id' => function () {
                return SubCluster::inRandomOrder()->first()->id;
            },
        ];
    }
}
