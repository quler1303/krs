var audio = document.getElementById("happy");

// Funkcja do automatycznego odtwarzania po załadowaniu strony
window.onload = function() {
    audio.play();
};

// Funkcja do zatrzymywania muzyki
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Przewiń do początku
}

// Funkcja do wznowienia odtwarzania po zatrzymaniu
function playAudio() {
    audio.play();
}