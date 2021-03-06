// Type your program in here!
function stream_pairs(s) {
    return is_null(s)
        ? null
        :  stream_append(
            stream_map(
            sn => pair(head(s), sn),
            stream_tail(s)),
            stream_pairs(stream_tail(s)));
}

const ints = enum_stream(1,5);
const stream_pairs_int = stream_pairs(ints);

// eval_stream(stream_pairs_int, 10);

// Question 1
// part a
// Stream_pairs_ints returns a list of all possible values in a stream

// part b
// stream_pairs takes in the first element and pairs it with the
// other remainding elements in the stream

// part c
// Does not work for an infinite stream
// The error may have arisen from forcing
// the infinite stream: function integers_from.

function stream_append_pickle(xs, ys) {
    return is_null(xs)
    ? ys()
    : pair(head(xs),
        () => stream_append_pickle(stream_tail(xs),
        ys));
}

function stream_pairs2(s) {
    return is_null(s)
    ? null
    : stream_append_pickle(
        stream_map(
        sn => pair(head(s), sn),
        stream_tail(s)),
        () => stream_pairs2(stream_tail(s)));
}

const integers = integers_from(1);
const s2 = stream_pairs2(integers);

// eval_stream(s2, 10);

// part d
// xs will always be 1 as ys goes to infinity as the stream is extended

// part e
// interleave append 2 streams


// Question 2
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

const add_series = add_streams;

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}


function mul_series(s1, s2) {
    return pair(head(s1),
        () => add_series(scale_stream(), s2));
}

const ones = pair(1, () => ones);

const test = mul_series(ones, ones);

eval_stream(test, 5);







