<?php

function mapResourceNames($output_name, $methods = null)
{
    $methods_arr = [
        'index',
        'create',
        'store',
        'show',
        'edit',
        'update',
        'destroy',
    ];

    $type = gettype($methods);

    if ($type == 'string') {
        $methods_arr = [$methods];
    } elseif ($type == 'array' && count($methods) > 0) {
        $methods_arr = $methods;
    }

    return collect($methods_arr)
        ->flatMap(function ($method) use ($output_name) {
            return [$method => "$output_name.$method"];
        })
        ->toArray();
}
