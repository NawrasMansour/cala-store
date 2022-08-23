<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSubGroupRequest extends FormRequest
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
        return [
            'en_name' => 'required|string|unique:sub_groups',
            'ar_name' => 'required|string',
            'en_description' => '',
            'ar_description' => '',
            'picture' => 'image|mimes:jpeg,jpg,bmp,png|max:4096',
            'group_id' => 'required|exists:groups,id',
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
