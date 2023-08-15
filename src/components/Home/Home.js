import './Home.css';
import { orangeCow, frogResult } from '../../assets';

export default function Home() {
  return (
    <div class="mainContent">
      <div class="contentBoxCenter">
          <p id="hiImGrace">Hi, I'm Grace!</p>
          <img id="cow" src={orangeCow} alt="orange cow"/>
          <p>(I'm not a cow...I'm a person.)</p>
      </div>
      <div class="contentBoxLeft">
          <p>
              <b>Welcome to my *~*~portal~*~* on the internet.</b>
              I will write more here later!
          </p>
      </div>
      <div class="contentBoxCenter">
          What kind of frog am I?<br/><br/>
          <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">
              <img src={frogResult} width="215" height="100" alt="I'm a Pac Man Frog!" border="0" />
          </a>
          <br/>Argentinian Horned frogs seem to have been designed for the sole purpose of eating as
          much as possible. They appear to consist of two main parts: a mouth and a stomach. This is
          probably where they got the nickname "PacMan". Their needs are fairly simple, a warm habitat
          in a simple plastic box or aquarium with some shallow water and a few rocks so that they can
          laze around all day suits them just fine. They don't mix well with other frogs, even in
          their own species, as they are just as likely to eat them.
          <a href="http://www.allaboutfrogs.org/funstuff/frogtest.php3" target="_blank" rel="noreferrer">What kind of Frog are <i>you</i>?</a>
      </div>
    </div>
  );
}