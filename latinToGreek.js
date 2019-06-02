class LatinToGreek {
  constructor() {
    this.replacements = {};
    this.replacements["ά"] = "α";
    this.replacements["ό"] = "ο";
    this.replacements["έ"] = "ε";
    this.replacements["ύ"] = "υ";
    this.replacements["ϋ"] = "υ";
    this.replacements["ή"] = "η";
    this.replacements["ί"] = "ι";
    this.replacements["ϊ"] = "ι";
    this.replacements["ώ"] = "ω";
    this.replacements["ς"] = "σ";

    this.latin = {};
    this.latin["A"] = "Α";
    this.latin["B"] = "Β";
    this.latin["C"] = "Σ";
    this.latin["D"] = "Δ";
    this.latin["E"] = "Ε";
    this.latin["F"] = "Φ";
    this.latin["G"] = "Γ";
    this.latin["H"] = "Η";
    this.latin["I"] = "Ι";
    this.latin["J"] = "ΤΖ";
    this.latin["K"] = "Κ";
    this.latin["L"] = "Λ";
    this.latin["M"] = "Μ";
    this.latin["N"] = "Ν";
    this.latin["O"] = "Ο";
    this.latin["P"] = "π";
    this.latin["Q"] = "Κ";
    this.latin["R"] = "Ρ";
    this.latin["S"] = "Σ";
    this.latin["T"] = "Τ";
    this.latin["U"] = "Υ";
    this.latin["V"] = "Β";
    this.latin["W"] = "Ω";
    this.latin["X"] = "Χ";
    this.latin["Y"] = "Υ";
    this.latin["Z"] = "Ζ";
    this.latin["PS"] = "Ψ";

    this.latin["a"] = "α";
    this.latin["b"] = "β";
    this.latin["c"] = "σ";
    this.latin["d"] = "δ";
    this.latin["e"] = "ε";
    this.latin["f"] = "φ";
    this.latin["g"] = "γ";
    this.latin["h"] = "η";
    this.latin["i"] = "ι";
    this.latin["j"] = "γ";
    this.latin["k"] = "κ";
    this.latin["l"] = "λ";
    this.latin["m"] = "μ";
    this.latin["n"] = "ν";
    this.latin["o"] = "ο";
    this.latin["p"] = "π";
    this.latin["q"] = "κ";
    this.latin["r"] = "ρ";
    this.latin["s"] = "σ";
    this.latin["t"] = "τ";
    this.latin["u"] = "υ";
    this.latin["v"] = "β";
    this.latin["w"] = "ω";
    this.latin["x"] = "χ";
    this.latin["y"] = "υ";
    this.latin["z"] = "ζ";
    this.latin["ps"] = "ψ";

    this.equivalents = {};
    this.equivalents["ω"] = "ο";
    this.equivalents["η"] = "ι";
    this.equivalents["οι"] = "ι";
    this.equivalents["ει"] = "ι";
    this.equivalents["αι"] = "ε";
    this.equivalents["ου"] = "u";
    this.equivalents["υ"] = "ι";
  }

  replaceSpecialChars(str) {
    let target = str.slice().toLowerCase();
    for (const [key, value] of Object.entries(this.replacements)) {
      target = target.replace(new RegExp(key, "g"), value);
    }
    return target;
  }

  replaceEquivalents(str) {
    let target = str.slice().toLowerCase();
    for (const [key, value] of Object.entries(this.equivalents)) {
      target = target.replace(new RegExp(key, "g"), value);
    }
    return target;
  }

  toGreek(str) {
    let target = str;
    for (const [key, value] of Object.entries(this.latin)) {
      target = target.replace(new RegExp(key, "g"), value);
    }
    return target;
  }

  latinToGreek(str) {
    let array = str
      .slice()
      .split(/[ ,.;]+/)
      .filter(x => x);
    let repArray = [];
    array.map(x => {
      let v1 = x.slice().replace(new RegExp("PS", "g"), "ψ");
      repArray.push(v1);
      if (v1.includes("P")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("P", "g"), "ρ");
          repArray.push(v2);
        });
      }
      if (v1.includes("PH")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("PH", "g"), "φ");
          repArray.push(v2);
        });
      }
      if (v1.includes("TH")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("TH", "g"), "θ");
          repArray.push(v2);
        });
      }
      if (v1.includes("U")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("U", "g"), "ου");
          repArray.push(v2);
        });
      }
      if (v1.includes("Y")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("Y", "g"), "ψ");
          repArray.push(v2);
        });
      }
      if (v1.includes("X")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("X", "g"), "ξ");
          repArray.push(v2);
        });
      }
      if (v1.includes("H")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("H", "g"), "χ");
          repArray.push(v2);
        });
      }
      if (v1.includes("CH")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("CH", "g"), "χ");
          repArray.push(v2);
        });
      }
      if (v1.includes("OO")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("OO", "g"), "ΟΥ");
          repArray.push(v2);
        });
      }
      if (v1.includes("J")) {
        repArray.map(word => {
          let v2 = word.slice().replace(new RegExp("J", "g"), "γ");
          repArray.push(v2);
        });
      }
      repArray.map((word, i) => {
        repArray[i] = this.toGreek(word).toLowerCase();
      });
    });
    return repArray;
  }

}

module.exports = LatinToGreek;
