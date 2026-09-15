<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('users')
            ->whereNull('phone_number')
            ->chunkById(200, function ($users) {
                foreach ($users as $user) {
                    DB::table('users')->where('id', $user->id)
                        ->update(['phone_number' => fake()->unique()->e164PhoneNumber()]);
                }
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
