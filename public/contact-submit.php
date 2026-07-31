<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $subject = trim($_POST['subject'] ?? 'New contact form message');
    $message = trim($_POST['message'] ?? '');

    if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo 'Please fill in the required fields and enter a valid email address.';
        exit;
    }

    // Prevent submitted values from injecting additional mail headers.
    $name = str_replace(["\r", "\n"], ' ', $name);
    $email = str_replace(["\r", "\n"], '', $email);
    $subject = str_replace(["\r", "\n"], ' ', $subject);

    $to = 'binshida.pv@gmail.com';
    $emailSubject = 'FC Strikers Contact Form: ' . $subject;
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phone\n\n";
    $emailBody .= "Message:\n$message\n";
    $headers = "From: FC Strikers Website <info.fcsfa@gmail.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $sent = mail($to, $emailSubject, $emailBody, $headers);

    if ($sent) {
        header('Location: /contact?success=1');
        exit;
    }

    http_response_code(500);
    echo 'Sorry, your message could not be sent right now.';
} else {
    http_response_code(405);
    echo 'Method not allowed.';
}
?>
