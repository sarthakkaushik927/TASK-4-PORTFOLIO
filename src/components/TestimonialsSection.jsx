import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Dianne Russell', role: 'Starbucks', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."', avatar: 'https://placehold.co/100x100/f3e8ff/4c1d95?text=DR' },
    { name: 'Kristin Watson', role: 'Louis Vuitton', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."', avatar: 'https://placehold.co/100x100/f3e8ff/4c1d95?text=KW' },
    { name: 'Kathryn Murphy', role: 'McDonalds', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."', avatar: 'https://placehold.co/100x100/f3e8ff/4c1d95?text=KM' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-gray-500 font-medium">Clients Feedback</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Customer testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="text-yellow-400 mb-4">{'★★★★★'}</div>
              <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;