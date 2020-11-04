<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Randomizer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        $blocchi = array(
            array(
                'number' => '1',
                'icon' => 'icon-1.png',
                'titolo' => 'Random 1',
                'sottotitolo' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ),
            array(
                'number' => '2',
                'icon' => 'icon-2.png',
                'titolo' => 'Random 2',
                'sottotitolo' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ),
            array(
                'number' => '3',
                'icon' => 'icon-3.png',
                'titolo' => 'Random 3',
                'sottotitolo' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ),
            array(
                'number' => '4',
                'icon' => 'icon-4.png',
                'titolo' => 'Random 4',
                'sottotitolo' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            )
        );

        $return = array();

        for( $i = 0; $i < 3; $i++ ){

            $random = rand(0, count($blocchi)-1);

            $random_content = $blocchi[ $random ];

            unset( $blocchi[ $random ] );
            $blocchi = array_values($blocchi);
            
            $return[ sprintf( 'elemento_%d', $i + 1 ) ] =  $random_content;

        }

        return $return;

    }
}
