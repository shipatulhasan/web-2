type bandhobi = "monika" | "recel" | "phebe";
type removeBandhobi<T, k> = T extends k ? never : T;
type currentBandhoobi = removeBandhobi<bandhobi, "monika">;
