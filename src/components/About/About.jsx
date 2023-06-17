import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <> 
    <Container maxW={'90%'}>
        <Heading textAlign={'center'} m={'4'}>About us</Heading>

<Box p={'4'} mt={8}>
  <Heading as="h2" size="lg" mb={4}>
    Terms and Conditions
  </Heading>
  <Text fontSize="lg">
    By accessing and using this course, you agree to the following terms and conditions:

    1. Intellectual Property: All course materials, including but not limited to text, images, videos, and downloadable resources, are protected by intellectual property rights and are owned by ALIMITED. You may not distribute, reproduce, or modify any course material without prior written permission.

    2. Course Enrollment: By enrolling in this course, you gain access to the course content for the specified duration. The course content is for personal, non-commercial use only, and you are strictly prohibited from sharing your account credentials or granting access to third parties.

    3. Refunds: We offer a refund policy that allows you to request a refund within  7 days from the date of purchase. Please review our refund policy for detailed information on eligibility and the refund process.

    4. User Responsibilities: You are responsible for providing accurate and up-to-date information during the enrollment process. You are also responsible for maintaining the confidentiality of your account credentials and ensuring their proper use.

    5. Code of Conduct: While participating in this course, you agree to maintain respectful and professional conduct. Any form of harassment, offensive language, or inappropriate behavior towards instructors or fellow learners will not be tolerated and may result in immediate termination of access without a refund.

    6. Technical Requirements: To access the course content, you must have a reliable internet connection and compatible devices. ALIMITED is not responsible for any technical issues or limitations on your end that may affect your learning experience.

    7. Limitation of Liability: ALIMITED shall not be held liable for any direct or indirect damages, including but not limited to financial loss, personal injury, or data loss, arising from the use or inability to use the course materials or any actions taken based on the course content.

    8. Modifications: ALIMITED reserves the right to modify or update these terms and conditions at any time. Any changes will be communicated to you via email or through the course platform.

    By enrolling in this course, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or concerns, please contact our support team for assistance.
  </Text>
</Box>


    </Container>
    </>
  )
}

export default About