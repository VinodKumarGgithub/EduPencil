import illustration1 from 'assets/img/icons/spot-illustrations/50.png';
import illustration2 from 'assets/img/icons/spot-illustrations/49.png';
import illustration3 from 'assets/img/icons/spot-illustrations/48.png';

export default [
  {
    icon: ['far', 'lightbulb'],
    iconText: 'Learn',
    color: 'danger',
    title: 'Learning & development',
    description:
      'With Falcon as your guide, now you have a fine-tuned state of the earth tool to make your wireframe a reality.',
    image: illustration1
  },
  {
    icon: ['far', 'object-ungroup'],
    iconText: 'Think',
    color: 'info',
    title: 'Internships & Training',
    description:
      "Build any UI effortlessly with Falcon's robust set of layouts, 38 sets of built-in elements, carefully chosen colors, typography, and css helpers.",
    image: illustration2,
    inverse: true
  },
  {
    icon: ['far', 'paper-plane'],
    iconText: 'Apply',
    color: 'success',
    title: 'Employment & placement',
    description:
      'From IE to iOS, rigorously tested and optimized Falcon will give the near perfect finishing to your webapp; from the landing page to the logout screen.',
    image: illustration3
  }
];
