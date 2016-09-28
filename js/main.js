var wordLoop = {
    obj: {},
    string: null,
    array: null,
    count: null,
    init: function() {
        this.string = "From fairest creatures we desire increase,That thereby beauty's rose might never die, But as the riper should by time decease, His tender heir might bear his memory: But thou contracted to thine own bright eyes, Feed'st thy light's flame with self-substantial fuel, Making a famine where abundance lies, Thy self thy foe, to thy sweet self too cruel: Thou that art now the world's fresh ornament, And only herald to the gaudy spring, Within thine own bud buriest thy content, And tender churl mak'st waste in niggarding: Pity the world, or else this glutton be, To eat the world's due, by the grave and thee.";
        this.array = this.string.split(' ');
        this.count = 0;
    },
    loop: function() {

        while (this.count < this.array.length) {

            var currentString = this.array[this.count];

            if (currentString.length > 1) {
                this.obj[currentString] = 0;
            }

            this.count++;
        }
        this.count = 0;

        while (this.count < this.array.length) {
            console.clear();
            var currentString = this.array[this.count];

            for (word in this.obj) { // for-in for OBJECTS
                if (currentString === word) {
                    this.obj[word]++;
                    console.log(this.obj);
                }
            }
            this.count++;
        }
    }
};
wordLoop.init();
wordLoop.loop();
