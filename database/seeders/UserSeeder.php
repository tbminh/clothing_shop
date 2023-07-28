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
        DB::table('users')->insert([
            'name' =>  'Admin',
            'roles' =>  'admin',
            'email' =>  'admin@admin.vn',
            'password' => Hash::make('12345'),
            'phone_number' => '0123456789',
          
        ]);
        for($i = 0; $i < 5 ; $i++){
            DB::table('users')->insert([
                'name' =>  $faker->name,
                'roles' =>  'user',
                'email' =>  $faker->unique()->email,
                'password' => Hash::make('12345'),
                'phone_number' => $faker->numerify('##########'),
                // 'email' => Str::random(10).'@gmail.com',
            ]);
        }
    }
}
