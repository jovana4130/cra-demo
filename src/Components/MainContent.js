import './MainContent.css';

export const MainContent = () => {
    const divItems = [
        {title: 'Star Wars: The Phantom Menace', paragraph: 'Set 32 years before the original trilogy, during the era of the Galactic Republic, the plot follows Jedi Master Qui-Gon Jinn and his apprentice Obi-Wan Kenobi as they try to protect Queen Padmé Amidala of Naboo in hopes of securing a peaceful end to an interplanetary trade dispute. '},
        {title: 'Star Wars: Attack of the Clones', paragraph: 'The story is set ten years after The Phantom Menace, as thousands of planetary systems slowly secede from the Galactic Republic and join the newly-formed Confederacy of Independent Systems, led by former Jedi Master Count Dooku.'},
        {title: 'Star Wars: Revenge of the Sith', paragraph: 'Revenge of the Sith is set three years after the onset of the Clone Wars as established in Attack of the Clones. The Jedi are spread across the galaxy in a full-scale war against the Separatists.'},
        {title: 'Star Wars: A New Hope', paragraph: 'Set "a long time ago" in a fictional universe where the galaxy is ruled by the tyrannical Galactic Empire, the story focuses on a group of freedom fighters known as the Rebel Alliance, who aim to destroy the Empire\'s newest weapon, the Death Star. Luke Skywalker becomes caught in the conflict while learning the ways of a metaphysical power known as "the Force" from Jedi Master Obi-Wan Kenobi.'},
        {title: 'Star Wars: The Empire Strikes Back', paragraph: 'Set three years after the events of Star Wars, the film recounts the battle between the malevolent Galactic Empire, led by the Emperor, and the Rebel Alliance, led by Princess Leia. Luke Skywalker trains to master the Force so he can confront the powerful Sith lord, Darth Vader.'},
        {title: 'Star Wars: Return of the Jedi', paragraph: 'Set one year after The Empire Strikes Back, the Galactic Empire is constructing a second Death Star to exterminate the Rebel Alliance. With intel that the Emperor will be onboard, the Rebel fleet launches a full-scale attack on the Death Star in hopes of both destroying it and the Emperor. Meanwhile, Rebel hero Luke Skywalker, now a Jedi Knight, struggles to bring his father, Darth Vader, back to the light side of the Force.'},
    ];

    return (
        <div className="main">
            {divItems.map((item) => (
               <div className="item">
                    <h3 className="title">{item.title}</h3>
                    <p className="paragraph">{item.paragraph}</p>
                </div>
            ))};
        </div>
    );
};
