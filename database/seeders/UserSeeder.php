<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for($i = 0; $i < 5 ; $i++){
            DB::table('users')->insert([
                'name' =>  $faker->name,
                'email' =>  $faker->unique()->email,
                'password' => Hash::make('12345'),
                // 'name' => Str::random(10),
                // 'email' => Str::random(10).'@gmail.com',
                // 'password' => Hash::make('password'),
            ]);
        }
    }
}
