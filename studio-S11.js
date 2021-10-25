function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const A = pair(1, () => scale_stream(2, A));

// eval_stream(A, 5);

// A is a stream where the nth value in the stream is c^n.

const ones = pair(1, () => ones);


function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),
        () => add_streams(stream_tail(s1),
        stream_tail(s2)));
    }
}

const integers = pair(1, () => add_streams(ones, integers));

function mul_streams(a,b) {
    return pair(head(a) * head(b),
    () => mul_streams(stream_tail(a), stream_tail(b)));
}
const B = pair(1, () => mul_streams(B, integers));

// eval_stream(B, 5);

// B is a stream where the value of head B is multiplied by 
// its corresponding integer in the sequence
// factorial

const add_series = add_streams;

const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

const alt_ones = pair(1, () => pair(-1, () => alt_ones));

const zeroes = pair(head(alt_ones) * 0, () => zeroes);

// eval_stream(zeroes, 5);

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list),
            () => iter(tail(list)));
    }
    return iter(list_of_coeffs);
}


const S1 = mul_streams(integers, mul_streams(integers ,integers));








