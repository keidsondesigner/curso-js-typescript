function recursiva(max) {
    if (max > 10) return;
    max++;
    recursiva(max)
}

recursiva(-10)