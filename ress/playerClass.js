class Player {

    constructor() {

        console.log('Player is initializing');

        var props = player.getProps();

        player.setData = [props];

    }

    displayPlayer(videoid) {

        document.write(`<iframe width="854" height="480" src="https://www.youtube.com/embed/${videoid}" frameborder="0" allowfullscreen></iframe>`);

    }

}