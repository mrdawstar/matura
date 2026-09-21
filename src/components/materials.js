import { star, sparkle } from "./ui.js";
/** Small educational illustrations, shared by the editorial feature rows. */
export function Worksheet() {
  return `<div class="material-art paper-art" aria-hidden="true">
    <div class="mini-paper"><span>ENGLISH / WORKSHEET 01</span><b>Practice makes <br>progress.</b>
      <div class="paper-line"></div><div class="paper-line short"></div><p>01 &nbsp; Read. Think. Try.</p>
      <div class="paper-options">A <i></i> B <i class="selected"></i> C <i></i></div>
    </div><div class="paper-tab">YOUR NEXT STEP ↗</div><span class="paper-pen"></span>
  </div>`;
}
export function Feedback() {
  return `<div class="material-art feedback-art" aria-hidden="true">
    <div class="mini-feedback"><span>TWÓJ FEEDBACK</span><p>I <s>am agree</s> <strong>agree</strong> <br>with this idea.</p>
      <div>✓ Dobry argument! <br><span>„Agree” to czasownik — bez „am”.</span></div>
    </div><span class="feedback-badge">AHA! TERAZ ROZUMIEM.</span>
  </div>`;
}
export function Speaking() {
  return `<div class="material-art speaking-art" aria-hidden="true">
    <div class="headphones"><span></span><i></i><b></b></div>
    <div class="speaking-bubble">Let’s talk.</div><div class="speaking-response">I think… <span>${sparkle}</span></div>
  </div>`;
}
