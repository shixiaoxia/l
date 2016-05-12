window.onload = function listShow() {

    var list = document.getElementById('list');
    var h1 = list.getElementsByTagName('h1');
    var dl = list.getElementsByTagName('dl');
    var open = false;
    tmp = -1;
    for (var i = 0; i < h1.length; i++) {
        h1[i].index = i;
        h1[i].onclick = function () {
            for (var i = 0; i < h1.length; i++) {
                dl[i].style.display = 'none';
            }
            if (tmp == this.index && open) {
                dl[this.index].style.display = 'none';
                open = false;

            } else {
                dl[this.index].style.display = 'block';
                open = true;

            }
            tmp = this.index;


        }
    }
}