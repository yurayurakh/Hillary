<?phpinclude 'defines.php';$post = (!empty($_POST)) ? true :false;if($post) {    $name = stripcslashes($_POST['name']);    $phone = stripcslashes($_POST['phone']);    $subject = 'Заявка';    $error = '';    $message = '        <html>            <head>                <title>Заявка</title>            </head>            <body>                <p>Имя: '.$name.'</p>                <p>Телефон: '.$phone.'</p>            </body>        </html>';    if(!$error) {        $mail = mail(CONTACT_FORM, $subject, $message,            "From: Hillary.com.ua\r\n"            ."Content-type: text/html; charset=utf-8 \r\n"            ."X-Mailer: PHP/" . phpversion()        );        if($mail) {            echo "OK";        }    }    else {        echo '<div class="bg-danger">'.$error.'</div>';    }}