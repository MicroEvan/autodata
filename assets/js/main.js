const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim();
    const emailAddress = document.getElementById('emailAddress')?.value.trim();
    const vehicleModel = document.getElementById('vehicleModel')?.value.trim();
    const issueDescription = document.getElementById('issueDescription')?.value.trim();

    const messageLines = [
      'Hello Auto Data Diagnostics, I would like to book a service appointment.',
      '',
      `Full Name: ${fullName}`,
      `Email Address: ${emailAddress || 'Not provided'}`,
      `Vehicle Make & Model: ${vehicleModel}`,
      `Issue Description: ${issueDescription}`
    ];

    const whatsappUrl = `https://wa.me/260976043035?text=${encodeURIComponent(messageLines.join('\n'))}`;

    window.open(whatsappUrl, '_blank', 'noopener');
  });
}