branda = () => {
    prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('nav').style.display = 'block'
            for(a of document.querySelectorAll('.buttons')){
                a.style.display = 'block'
            }
        } else {
            document.querySelector('nav').style.display = 'none'
            for(a of document.querySelectorAll('.buttons')){
                a.style.display = 'none'
            }
        }
        prevScrollpos = currentScrollPos;
    }
}
back = () => {
    console.log(document.body.getBoundingClientRect().top)
    if (!document.body.getBoundingClientRect().top) {
        window.history.back()
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}


menu = buttonIndex => {
    switch (buttonIndex) {
        case 0:
            window.location.href = 'index.html'
            break;
        case 1:
            window.location.href = 'jawa.html'
            break;
        case 2:
            window.location.href = 'jodoh.html'
            break;
        case 3:
            window.location.href = 'hari.html'
            break;
        case 4:
            window.location.href = 'tentang.html'
            break;        
        case 6:
            window.location.href = 'mailto:rascallino69@gmail.com'
            break;
        case 7:
            window.location.href = 'https://play.google.com/store/apps/details?id=kalender.smooth.asia'
            break;
        case 8:
            window.location.href = 'https://buyungsp.github.io/kalender/'
            break;
        case 9:
            window.location.href = 'weton.html'
            break;
    }
};
opens = a => {
    switch (a) {
        case 0:
            sea.style.display = 'block'
            sea.cari.value = ''
            break;
        case 1:
            sea.style.display = 'none'
            sea.cari.value = ''
            break;
    }
}
weton = () => {
    branda()
    a = document
    for(b of Dy){
        d = a.createElement('span')
        d.id = 'nilai'
        d.innerHTML = `${b.hari} : ${b.nilai}`
        hariJawa.appendChild(d)
    }
    for(e of pN){
        g = a.createElement('span')
        g.id = 'nilai'
        g.innerHTML = `${e.hari} : ${e.nilai}`
        hariNasional.appendChild(g)
    }
}
pasaran = a => Math.floor(((a.getTime() - new Date(100, 0, 1).getTime()) / (24 * 60 * 60 * 1000)) % 5)
function writeHijri(date, type) {
    switch (type) {
        case 'bulan':
            options = { month: 'numeric'}
            break
        case 'tahun':
            options = { year: 'numeric'}
            break
        case 'tanggal':
            options = { dateStyle: 'full'}
            break
        default:
            options = { day: 'numeric'}
            break
    }
    return new Intl.DateTimeFormat('ar-SA-u-nu-latn', options).format(date || new Date())
}
function writeMa(date, type) {
    switch (type) {
        case 'tanggal':
            options = { dateStyle: 'full'}
            break
        case 'bulan':
            options = {day: 'numeric',month: 'numeric',}
            break
        case 'bulans':
            options = { month: 'numeric' }
            break
        case 'hari':
            options = { weekday: 'long' }
            break
        case 'angka':
            options = { day: 'numeric' }
            break
        case 'angkas':
            options = { month: 'long' }
            break
        default:
            options = { month: 'long',year: 'numeric'}
            break
    }
    return new Intl.DateTimeFormat('id-ID', options).format(date || new Date())
}
neptu = a =>{
    date = new Date(a)
    return {
        masehi: writeMa(date, 'tanggal'),
        hijri: writeHijri(date) + ' ' + bulans[`bulan${writeHijri(date,'bulan')}`][0] + " " + parseInt(writeHijri(date, 'tahun')) + ' H',
        hariMa: writeMa(date, 'hari'),
        tanggalMa: 'Tanggal ' + writeMa(date, 'angka'),
        bulanMa: 'Bulan ' + writeMa(date, 'angkas'),
        hariMaNi: Dy[date.getDay()].nilai,
        pasar: pN[pasaran(date)].hari,
        pasarNi: pN[pasaran(date)].nilai,
        nilai: Dy[date.getDay()].nilai + pN[pasaran(date)].nilai
    }
}

downs = async a => {
    await window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
    if (a) {
        down.style.display = 'none'
    } else {
        downs(true)
    }
}
reset = a =>{
    a.innerHTML = ''
    a.className = 'dy'
    a.style.backgroundColor = ''
    a.removeAttribute('date')
}
setTable = a =>{
    const {text,tanggal} = a
    b = document
    c = b.createElement('blockquote')
    c.innerHTML = text
    c.setAttribute('data-angka', writeHijri(tanggal))
    c.setAttribute('data-nama', pN[pasaran(tanggal)].hari)
    return c
}
setTables = a =>{
    const {back,opa,click,no,date} = a
    b = document.querySelectorAll('.dy')[no]
    b.classList.add('dy')
    b.style.backgroundColor = bulans[`bulan${writeHijri(back,'bulan')}`][1]
    b.style.opacity = opa
    b.setAttribute('onclick', click)
    b.setAttribute('date', date)
}
function chgMth(i) {
    dT = new Date();
    switch (i) {
        case 1:
            if (mT > 0) {
                mT--;
            } else {
                if (yR == 100) {
                    mT = 0;
                } else {
                    mT = 11;
                    yR--;
                }
            }
            break;
        case 2:
            if (mT < 11) {
                mT++;
            } else {
                if (yR == 250000) {
                    mT = 11;
                } else {
                    mT = 0;
                    yR++;
                }
            }
            break;
        default:
            mT = dT.getMonth()
            yR = dT.getFullYear()
            break;
    }
    cN = new Date(yR, mT).getDay();
    elem = document.querySelectorAll('.dy')
    elem.forEach(reset);
    for (bI = 0; bI < cN; bI++) {
        DY = new Intl.DateTimeFormat('id-ID',{day:'numeric'}).format(new Date(yR, mT,0)) - (cN - bI) + 1
        DYS = new Date(yR, mT - 1,DY)
        elem[bI].appendChild(setTable({text:DY,tanggal:DYS}))
        setTables({back:DYS,opa: .3,click:'chgMth(1)',no:bI})
    }
    days = []
    hari.find(datas => {
        [haris] = Object.keys(datas)
        if (haris.includes('/' + writeMa(new Date(yR, mT, 1), 'bulans'))) days.push(haris)
    })
    for (dY = 1; dY <= new Date(yR, mT+1,0).getDate(); dY++, cN++) {
        time = new Date(yR, mT, dY)
        d = setTable({text:dY,tanggal:time})
        e = document.createElement('cite')
        e.className = !days.includes(writeMa(time, 'bulan')) ? '' : 'day'
        d.appendChild(e)
        elem[cN].appendChild(d)
        setTables({back:time,opa: 1,click:'klik(this)',no:cN,date:time.getTime()})
        if (new Intl.DateTimeFormat('id-ID').format(dT) == `${dY}/${mT+1}/${yR}`) {
            elem[cN].style.backgroundColor = '#b9deff'
            klik(elem[cN])
        }
    }
    for (dYs = 1; cN <= 41; dYs++, cN++) {
        times = new Date(yR, mT+1, dYs)
        elem[cN].appendChild(setTable({text:dYs,tanggal:times}))
        setTables({back:times,opa: .3,click:'chgMth(2)',no:cN})
    }
    mTyR.innerHTML = writeMa(new Date(yR, mT))
}
klik = a => {
    b = neptu(parseInt(a.attributes.date.value))
    c = document
    if (c.querySelectorAll('.ring').length > 0) c.querySelector('.ring').classList.remove('ring')
    a.classList.add('ring')
    showDate.innerHTML = b.masehi
    showDay.innerHTML = b.hijri
    showHari.innerHTML = `${b.hariMa} : ${b.hariMaNi}`
    showWeton.innerHTML = `${b.pasar} : ${b.pasarNi}`
    showTotal.innerHTML = `Total : ${b.nilai}`
    listDay.innerHTML = ''
    hari.find(data => {
        [elems] = Object.keys(data)
        if (elems === writeMa(date, 'bulan')) {
            for (haris of data[elems]) {
                d = c.createElement('blockquote')
                d.className = 'list'
                d.innerHTML = haris
                listDay.appendChild(d)
            }
        }
    })
    down.style.display = !listDay.childElementCount? 'none' : 'block'
}
set = a =>{
    [b] = Object.keys(a)
    c = b.split('/')
    d = new Date(c[1] + '/' + c[0] + '/' + new Date().getFullYear())
    tanggal = new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long'}).format(d)
    e = document
    f = e.createElement('blockquote')
    f.className = 'list'
    f.setAttribute('data-after',tanggal)
    g = e.createElement('ul')
    for(h of a[b]){
        i = e.createElement('li')
        i.innerHTML = h
        g.appendChild(i)
    }
    listHari.appendChild(f)
    f.appendChild(g)
}
caris = a => {
    resets.children[0].style.display = !a.value.length? 'none' : 'block'
    i = []
    hari.find(data => {
        [elem] = Object.keys(data)
        data[elem].find(sear => {
            if(sear.toLowerCase().includes(a.value.toLowerCase())){
                i.push(data)
            }
        })
    })
    j = [...new Set(i)];
    listHari.innerHTML = ''
    j.forEach(k => set(k))
}
