<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    public function user(){
       return $this->belongsTo(User::class);
    }

    public function movie(){
        return $this->belongsTo(Movie::class);
    }

    public function seat(){
        return $this->belongsTo(Seat::class);
    }


    use HasFactory;

    protected $fillable = [
        'user_id',
        'movie_id',
        'day',
        'time',
        'seat_number'
    ];
}
