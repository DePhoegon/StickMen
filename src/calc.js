function Yfind(cntrl, Hy, Hr, ratio, bsx, bex, ax1, rax2, rax3, lax2, lax3, lx1, rlx2, rlx3, llx2, llx3) {
    let bsy = Hy + Hr;                                          /* Body Start Y */
    let bey = bsy + 4.5 * Hr;                                     /* Body End Y */
    let ay1 = bsy + 1 * Hr;                                     /* Arms Start Y */
    let ax1 = ((ay1 - bsy) / (bey - bsy)) * (bex - bsx) + bsx;    /* Arms Start X */
    let ray2 = negator(1.25, ratio, rax2, ax1, ay1);                      /* Right uper End Y */
    let ray3 = negator(1.35, ratio, rax3, rax2, ray2);                   /* Right lower arm end Y */
    let lay2 = negator(1.25, ratio, lax2, ax1, ay1);                     /* Left upper End Y */
    let ray3 = negator(1.35, ratio, lax3, lax2, lay2);                    /* Left ower Arm End Y */
    let rly2 = negator(1.75, ratio, rlx2, lx1, ly1);                 /* Right Upper Leg End Y */
    let lly2 = negator(1.75, ratio, llx2, lx1, ly1);                  /* Left Upper Leg End Y */
    let rly3 = negator(2, ratio, rlx3, rlx2, rly2);     /* Right Lower leg End */
    let lly3 = negator(2, ratio, llx3, llx2, rly2);     /* Left Lower Leg End Y */
}
/* Incomplete - Y Calculation for attaching things to body */