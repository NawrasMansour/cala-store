<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $id = $this->route('item');

        return [
            'en_name' => [
                'required',
                'string',
                 Rule::unique('items')->ignore($id)
            ],
            'ar_name' => 'required|string',
            'ar_name' => 'required|string',
            'en_description' => '',
            'ar_description' => '',
            'price' => '',
            'colorsAmounts' => '',
            'pictures' => '',
            'sub_group_id' => 'required|exists:sub_groups,id',
        ];
    }

    public function messages()
    {
        return [
            'en_name.required' => 'The English Name is empty. Please enter value',
            'en_name.unique' => 'The English Name is duplicated. Please enter new value',
            'ar_name.required' => 'The arabic Name is empty. Please enter value',
        ];
    }
}
