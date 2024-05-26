const users = [
    { userName: 'Jerad.Witting', password: 'yuWsz7nsNFOyTyF' },
    { userName: 'Zack6', password: 'mI7sefIyI9iSjLu' },
    { userName: 'Amya_Jast', password: 'oAP78AZDqUGYhRW' },
    { userName: 'Jodie_Wisoky', password: 'VKxVNcm83G7kmdx' },
    { userName: 'Kelsie59', password: '7WYYa_vQD4qcGlA' },
    { userName: 'Enola29', password: 'uXMSLtnizuCp3rD' },
    { userName: 'Aliyah_Kuphal77', password: 'pgeXiTSAwu2RmZB' },
    { userName: 'Martina.Olson44', password: 'r2ohyVnmQ5NH1i1' },
    { userName: 'Carmella68', password: 'KMIvmfe9HXLj4XU' },
    { userName: 'Ora.Gutmann72', password: 'eoa1YGgR3GcKIwS' },
    { userName: 'Nestor.Satterfield66', password: 'Ip6kiZXD0HnpPfI' },
    { userName: 'Brown51', password: 'bC_SyJEd2XhJxLH' },
    { userName: 'Sarah_Kub5', password: 'I4Lng9qFct1FIEq' },
    { userName: 'Noemi3', password: 'PflRHET3eCGBkcE' },
    { userName: 'Ralph_Wyman', password: 'pZvaK1RCtTVEJd5' },
    { userName: 'Wallace_Senger', password: 'r9ybVfFmK932FPB' },
    { userName: 'Fernando.Spinka83', password: 'rgzo1jV7puGmJSE' },
    { userName: 'Darrick.Towne26', password: 'IruqRGUODlzLhRA' },
    { userName: 'Felton.Greenholt', password: 'aGpu4Keikq48MdB' },
    { userName: 'Delfina_Pfannerstill', password: 'YfZjXGurerZbrHQ' },
    { userName: 'Adele85', password: 'eJPvIoDIjEehpQ2' },
    { userName: 'Veda.Larkin', password: 'S5nvpj_ltAnSnG7' },
    { userName: 'Favian20', password: 'm38QKFlIst7BLjv' },
    { userName: 'Mark44', password: '0HJmpUX_zGTH8Rg' },
    { userName: 'Margarette.Marks', password: 'K9X9fAkPL4gIqQF' },
    { userName: 'Lily18', password: 'yNWOkBGO475VeKv' },
    { userName: 'Kelvin_Bernier', password: 'HSHMkvKwEFBuXVp' },
    { userName: 'Oswald.Gusikowski', password: 'TwU620oM5mzb6qy' },
    { userName: 'Vilma_OReilly', password: 'CvS1bLEg3OQa1RO' },
    { userName: 'Tracey_Murphy60', password: 'oo2dMR7Sk4Wq2iM' },
    { userName: 'Mable_Becker', password: '5oR3_bnGlN3mNZ8' },
    { userName: 'Tate79', password: 'mBKSFumcKrbNUrI' },
    { userName: 'Sienna.Gleason69', password: 'CGmWad9bOGXTEQR' },
    { userName: 'Adrienne.Veum74', password: 'KKW9G4pe1XyAaCd' },
    { userName: 'Adaline_Gerlach78', password: 'VuSmDeZYMS5IJq9' },
    { userName: 'Merl.MacGyver78', password: 'm0zYFN3hXh_ksDx' },
    { userName: 'Matt.Swaniawski68', password: 'BZdqIsIM6kkFpuj' },
    { userName: 'Iliana.Wilderman', password: '09vaa7u7MriPCFf' },
    { userName: 'Jadyn90', password: 'MDMCs0s5jiqJAF9' },
    { userName: 'Laurianne_Olson42', password: 'yKmxMK11Pz9zPPJ' },
    { userName: 'Dayana85', password: 'xUcmU7i6QGlf1HF' },
    { userName: 'Dale93', password: 'b1POWCejY8Z2CB8' },
    { userName: 'Leonor98', password: 'HFmlrUgZq1fYbGv' },
    { userName: 'Jazmin0', password: 'M6l5wf302VBu12L' },
    { userName: 'Minerva_Haag17', password: 'xJajuuCYDpewhyf' },
    { userName: 'Gregory_Hessel43', password: '71aAnWQLarfAO7x' },
    { userName: 'Kamryn67', password: 'V68iMalugj3Rqi7' },
    { userName: 'Alysson77', password: 'UD2WTaRrZ3W3QAc' },
    { userName: 'Ansley88', password: 'IzRFJ1LRGGfW0j5' },
    { userName: 'Watson67', password: 'gNNehoxuUbBqQm6' },
    { userName: 'Rodolfo_Kub51', password: 'IUNaCH4llqSIWmT' },
    { userName: 'Jaycee58', password: 'Cs9JGk1I06Pyb_S' },
    { userName: 'Cierra.Becker', password: '_IxiyJJRGZkRGjh' },
    { userName: 'Seamus94', password: 'yxV_rPIuwUy6aZU' },
    { userName: 'Dejon97', password: 'sqzHWq7ZNBim3gc' },
    { userName: 'Agustin77', password: '4uPz6Kav_CYG40Z' },
    { userName: 'Maurine96', password: '6_2hqXajZT70prO' },
    { userName: 'Bertha_Glover0', password: 'wf_drnlTLGAg1Zh' },
    { userName: 'Faye_Greenfelder4', password: '569ecZKQTfjmVQz' },
    { userName: 'Trevor62', password: 'ldjF55_FxyawbuD' },
    { userName: 'Carolanne10', password: 'Bbc9MKsta13T8iN' },
    { userName: 'Anthony.Daugherty20', password: 'iq2J1YgTiyKJ9Ys' },
    { userName: 'Elyssa66', password: 'aaR6MY9Za6c09eJ' },
    { userName: 'Federico38', password: 'XKaa94lsQbYMMcL' },
    { userName: 'Blair.Farrell-Dietrich', password: 'Z_7UM4nWVeszSNb' },
    { userName: 'Derrick_Leannon', password: 'tw1lVcTJ3DQxf4q' },
    { userName: 'Reginald88', password: 'INSPLPZAcjVHxHo' },
    { userName: 'Delaney_Hessel', password: 'AGOVsN2OXzUu6eg' },
    { userName: 'Cyril_Johns', password: 'aChFFSUQS19Tvsp' },
    { userName: 'Ahmad55', password: 'DXgAb8Inx4vmU7Z' },
    { userName: 'Porter.MacGyver', password: 'uJtBccPXdBlPZzL' },
    { userName: 'Rosalyn58', password: 'Iwq4JjILxATikWB' },
    { userName: 'Samson.Fritsch29', password: 'DPrVyFywlG3cGbK' },
    { userName: 'Jerad15', password: '1DfuV5bqIhzN8iD' },
    { userName: 'Carroll.Emard', password: '3bpEA6HB5kXntL9' },
    { userName: 'Delores.Klocko49', password: 'im53twZBvJiYEQP' },
    { userName: 'Daphnee.Erdman', password: 'rswouAq1GURt_P6' },
    { userName: 'Tina.Ferry12', password: 'DwgsFhN0Jby3NtC' },
    { userName: 'Katelin78', password: 'xqlxKcwTjAPD6Og' },
    { userName: 'Alberta.Lueilwitz52', password: 'YtPlf105Ep3Bfz4' },
    { userName: 'Dejuan_Kihn-Feil', password: 'IhyG0thn29gQuLu' },
    { userName: 'Vinnie88', password: 'ApOymmBNquFbOWP' },
    { userName: 'Bobby.Leannon', password: 'nwVN6y2wM30Kdwb' },
    { userName: 'Kathryne_Schowalter', password: 'Qr_7bsRjLy2HVpz' },
    { userName: 'Stephania.Heller97', password: 'xmcCxzYFHbMF9Pf' },
    { userName: 'Daisha20', password: 'MB48wu2SlqHSIj9' },
    { userName: 'Marco_Tremblay-Crist34', password: 'cjoMD0QxvuJjjhH' },
    { userName: 'Brando64', password: 'QiQSv12tImITjSg' },
    { userName: 'Ena12', password: 'ht07tnkVVJwY7_K' },
    { userName: 'Nina69', password: '_8pKHxGx_Mez9Px' },
    { userName: 'Darien_Kihn99', password: 'AQ6XKvoCnzXxVd_' },
    { userName: 'Diamond.Wuckert', password: 'Y8_FBIV1bKCBMEw' },
    { userName: 'Lewis_Lueilwitz', password: 'YYs4aUMjGQy6jtn' },
    { userName: 'Candelario.Collins94', password: 'vNiyOGON5Asbtm9' },
    { userName: 'Bertha85', password: 'qBsMI0tuydauPo6' },
    { userName: 'Lillie.Keeling86', password: 'm0v_OEPSoDPqlnn' },
    { userName: 'Pauline_Jakubowski', password: 'rB45XiSXob0vWMu' },
    { userName: 'Hassan.Kozey', password: 'woFRqN0DtAxFTdC' },
    { userName: 'Jadon77', password: 'NPes5MFAv3NZcV8' },
    { userName: 'Morton_Lockman', password: 'gAWChKtyU31yzar' }
]

const usersObj = users.reduce((obj, currentUser) => {
    obj[`${currentUser.userName}:${currentUser.password}`] = currentUser
    return obj
}, {})
console.log(users)
console.log(usersObj)

function loginUserOn(username, password) {
    const userToFind = users.find(u => u.password === password && u.userName === username)
    if (userToFind) {
        console.log("user authenticated")
    } else {
        console.log("***user unauthorized***")
    }
    return userToFind
}

console.log(loginUserOn("Pauline_Jakubowski", "rB45XiSXob0vWMu"))
console.log(loginUserO1("Pauline_Jakubowski", "rB45XiSXob0vWMu"))

function loginUserO1(username, password) {
    const user = usersObj[`${username}:${password}`]
    if (user) {
        console.log("user authenticated")
    } else {
        console.log("***user unauthorized***")
    }
    return user
}

// you need to implement the loginUser
// & think about a better complexity algorithem that will solve this issue in better complexity than O(n)