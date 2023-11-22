<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\returnSelf;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = password_hash($request->password, PASSWORD_BCRYPT);

        $saved = $user->save();

        return $saved ;
    }

    public function loginIn(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $id = DB::table('users')->where('email', $email)->value('id');
        $info = null;
        if ($id !== null) {
            $user = User::find($id);
            
            if (password_verify($password, $user->password)) {
                $info =[
                    'value' => true,
                    'mensaje' => ''
                ];
                return $info;
            } else {
                $info =[
                    'value' => false,
                    'mensaje' => 'Contraseña incorrecta'
                ];
                return $info;
            } 
        } else {
            $info =[
                'value' => false,
                'mensaje' => 'Usuario no encontrado'
            ];
            return $info;
        } 

    }

}
