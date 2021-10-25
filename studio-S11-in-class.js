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

// Qn1 
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

eval_stream(s2, 10);

//





