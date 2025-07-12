<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Platform langding Page</title>
    <!--Google Font Link -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap" rel="stylesheet">
    <!-- Slick CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
 <!-- Awesome font link -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- AOS CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet" />
     <!-- Style CSS link -->
    <link rel="stylesheet" href="/assets/style/style.css">
    <!-- Responsive design css -->
     <link rel="stylesheet" href="/assets/style/responsive.css">
</head>

<body>

    <!-- difference of the include(show only warning for section),required(not found components then show and hack
    allwebsite error),include_once(show only one), require_once(show only one) -->


    <!-- Start Header Section -->
    <?php include_once 'header.php';?>
    <!-- Start Hero Section -->

    <?php
      include_once 'partials/hero.php';
     ?>
    <!-- Start Courses Section -->
    <?php
     require_once 'partials/courses.php';
     ?>

    <!-- Start Testimonial Section -->
    <?php
     require_once 'partials/testimonial.php';
     ?>

    <!-- Start Feature Section -->
    <?php
     require_once 'partials/feature-section.php';
     ?>

    <!-- Start CTA Section -->
    <?php
     require_once 'partials/cta-section.php';
     ?>

    <!-- start Blog Section -->
    <?php 
    require_once 'partials/blog.php';
    ?>

    <!-- Start Footer Section -->
    <?php 
    require_once 'footer.php';
    ?>

     <!-- jQuery  -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- Slick JS -->
  <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  <!-- AOS JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

  <!-- Custom JS -->
<script src="/assets/JS/custom.js"></script>


</body>

</html>