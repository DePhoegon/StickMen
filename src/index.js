/* Color Section, line */
var HCol = "purple"; /* head */
var LlCol = "purple"; /* Left Leg Upper */
var RlCol = "purple"; /* Right Leg Upper */
var BCol = "purple"; /* Body */
var LLCol = "purple"; /* Left Leg Lower */
var RLCol = "purple"; /* Right Leg Lower */
var RACol = "purple"; /* Right Arm Lower */
var RaCol = "purple"; /* Right Arm Upper */
var LACol = "purple"; /* Left Arm Lower */
var LaCol = "purple"; /* Left Arm Upper */
/* Color Section, end */
/* Initial Size Variables */
var hclr = 75;                                                /* Head Center X */
var hcud = 45;                                                /* Head Center Y */
var hr = 25;                                                  /* Head Radius */
var alen = 1.75 * hr;                                         /* Body Ratios */


/* Size Variable End Y generated in pose function*/

function negator(mul, ratio, Endx, Startx, StartY) {
    let neg = ((Endx - Startx) < 0 ? StartY + (ratio * mul + (Endx - Startx)) : StartY + (ratio * mul - (Endx - Startx)));
    return neg;
} /* Returns, the difference between the ratio control and the difference of the X change */

function Body(Cont, Canvas, UpperX1, UpperX2, LowerX2, UpperY1, UpperY2, LowerY2, UpperColor, LowerColor) {
    if (Cont === 0) { cir(Canvas, UpperX1, UpperY1, LowerY2, UpperColor); } /* Head */
    if (Cont === 1) { line(Canvas, UpperX1, UpperX2, UpperY1, UpperY2, UpperColor); } /* Segment */
    if (Cont === 2) {
        line(Canvas, UpperX1, UpperX2, UpperY1, UpperY2, UpperColor); /* 'upper'  */
        line(Canvas, UpperX2, LowerX2, UpperY2, LowerY2, LowerColor); /* 'lower' */
    }
} /* Multi-Stage Body maker */

function tpose(canv, Hx, Hy, Hr, Hc, ratio, bc, rauc, ralc, lauc, lalc, rluc, rllc, lluc, lllc) {
    var bsx = hclr;                                               /* Body Start X */
    var bex = hclr + 0;                                          /* Body End X */
    var bsy = Hy + Hr;                                          /* Body Start Y */
    var bey = bsy + 4.5 * Hr;                                     /* Body End Y */
    var ay1 = bsy + 1 * Hr;                                     /* Arms Start Y */
    var ax1 = ((ay1 - bsy) / (bey - bsy)) * (bex - bsx) + bsx;    /* Arms Start X */
    var rax2 = ax1 - 30;                                         /* Right forarm End X */
    var rax3 = rax2 - 0;                                         /* Right arm end X */
    var lax2 = ax1 + 30;                                         /* Left forarm End X */
    var lax3 = lax2 + 0;                                         /* Left Arm End X */
    var rlx2 = bex - 20;                                           /* Right Upper Leg End X */
    var llx2 = bex + 20;                                           /* Left Upper Leg End X */
    var rlx3 = rlx2 - 5;                                         /* Right Lower leg End X */
    var llx3 = llx2 + 5;                                         /* Left Lower Leg End X */
    var ray2 = negator(1.25, ratio, rax2, ax1, ay1);                      /* Right uper End Y */
    var ray3 = negator(1.35, ratio, rax3, rax2, ray2);                   /* Right lower arm end Y */
    var lay2 = negator(1.25, ratio, lax2, ax1, ay1);                     /* Left upper End Y */
    var lay3 = negator(1.35, ratio, lax3, lax2, lay2);                    /* Left ower Arm End Y */
    var rly2 = negator(1.75, ratio, rlx2, bex, bey);                 /* Right Upper Leg End Y -use arm Start Y for sitting */
    var lly2 = negator(1.75, ratio, llx2, bex, bey);                  /* Left Upper Leg End Y -use arm Start Y for sitting */
    var rly3 = negator(2, ratio, rlx3, rlx2, rly2);     /* Right Lower leg End */
    var lly3 = negator(2, ratio, llx3, llx2, lly2);     /* Left Lower Leg End Y */
    Body(0, canv, Hx, 0, 0, Hy, 0, Hr, Hc); /* Head */
    Body(1, canv, bsx, bex, 0, bsy, bey, 0, bc); /* Body */
    Body(2, canv, ax1, rax2, rax3, ay1, ray2, ray3, rauc, ralc); /* Right Arm */
    Body(2, canv, ax1, lax2, lax3, ay1, lay2, lay3, lauc, lalc); /* Left Arm */
    Body(2, canv, bex, rlx2, rlx3, bey, rly2, rly3, rluc, rllc); /* Right Leg */
    Body(2, canv, bex, llx2, llx3, bey, lly2, lly3, lluc, lllc); /* Left Leg */
} /* Tpose for canvas stickman */
/*
Canvas
Head X, Head Y, Head Radius, Head Color
Body Start X - Body End X - Body Color
Arms Start X - Right Arm X2 - Right Arm X3 - Right Arm Upper Color - Right Arm Lower Color
Left Arm X2 - Left Arm X3 - Left Arm Upper Color - Left Arm - Lower Color
Leg Start X - Right Leg X2 - Right Leg X3 - Right Upper Leg Color - Right  Lower Leg Color
Left Leg X2 - Left Leg X3 - Left Upper Leg Color - Left Leg Lower Color
*/

function line(Canvas, StartX, EndX, StartY, EndY, Color) {
    Canvas.beginPath();
    Canvas.strokeStyle = Color;
    Canvas.moveTo(StartX, StartY);
    Canvas.lineTo(EndX, EndY);
    Canvas.stroke();
} /* Lines */
function cir(Canvas, CenterX, CenterY, Radius, Color) {
    Canvas.beginPath();
    Canvas.strokeStyle = Color;
    Canvas.arc(CenterX, CenterY, Radius, 0, 2 * Math.PI);
    Canvas.stroke();
} /* Circles */

var room = document.getElementById("bob");
var floor = room.getContext("2d");
tpose(floor, hclr, hcud, hr, HCol, alen, BCol, RaCol, RACol, LaCol, LACol, LlCol, LLCol, RlCol, RLCol);