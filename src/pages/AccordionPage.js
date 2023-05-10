import Accordion from '../components/Accordion';

function AccordionPage() {

  const items = [
    {
      id: 'a1',
      label: 'Can I use React on a project?',
      content: 'React is the most popular JavaScript framework on the planet. You can use it to quickly create feature-rich web AccordionPagelications. Also, it enables you to easily add new features to your existing project, like React image upload.',
    },
    {
      id: 'a2',
      label: 'Can I use JS on a project?',
      content: 'You can use JavaScript to build both front-end development projects as well as back-end projects on the server side using Node. js framework. If you are new to programming, start with an easy JavaScript project idea for beginners, such as a simple stopwatch, a tip calculator, or an animated navigation toggle',
    },
    {
      id: 'a3',
      label: 'Can I use CSS on a project?',
      content: 'Both HTML and CSS are not programming language. JavaScript is one. So in your project you can use HTML and CSS for the UI and JavaScript for the rest.',
    }
  ];

  return <>
    < Accordion items={items} />
  </>

}

export default AccordionPage;
