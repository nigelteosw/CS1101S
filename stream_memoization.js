// Type your program in here!!
function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    display("memo_fun called");
    function mfun() {
        display("mfun called");
        display(already_run);
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

//const onesA = pair(1, () => ms("A", onesA));

function ms(m, s) {
    display(m);
    display(s);
    return s;
}

//stream_ref(onesA, 3);

// const onesB = 
//     pair(1, memo_fun(() => ms("B", onesB)));
    
//stream_ref(onesB, 3);

function m_integers_from(n) {
    return pair(n, 
        memo_fun(
            () => ms("M: " + stringify(n), 
                m_integers_from(n + 1))));
    }
const m_integers = m_integers_from(1);
stream_ref(m_integers, 0);
stream_ref(m_integers, 2);