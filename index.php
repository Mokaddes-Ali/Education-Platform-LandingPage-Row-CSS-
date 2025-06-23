<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Platform langding Page</title>
    <!-- Font Link -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="assets/style.css">
</head>

<body>

    <!-- difference of the include(show only warning for section),required(not found components then show and hack
    allwebsite error),include_once(show only one), require_once(show only one) -->

    <!-- Start Header Section -->
    <?php include_once 'header.php';?>
    <!-- End Header Section -->
    <!-- Start Hero Section -->

    <?php include_once 'partials/hero.php';?>
    <!-- End Hero Section -->

    <!-- Start Courses Section -->
    <?php require_once 'partials/courses.php';?>

    <!-- End Courses Section -->

    <!-- Start Testimonial Section -->
    <?php require_once 'partials/testimonial.php';?>

    <!-- End Testimonial Section -->

    <!-- Start Feature Section -->
    <?php require_once 'partials/feature-section.php';?>
    <!-- End Feature Section -->

    <!-- Start CTA Section -->
    <?php require_once 'partials/cta-section.php';?>
    <!-- End CTA Section -->

    <!-- start Blog Section -->
    <?php require_once 'partials/blog.php';?>

    <!-- End Blog Section -->

    <!-- Start Footer Section -->
    <?php require_once 'footer.php';?>
    <!-- End Footer Section -->

</body>

</html>