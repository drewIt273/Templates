/**Instance by DrewIt */
(function() {
    (function() {
        var tabs = document.querySelectorAll('[data-tab][scroll-to-section]'), c = 1, sects = document.querySelectorAll('section'), t = sects.length, T = setTimeout;
        function s(i) {
            if (i < 1 || i > t) return;
            const target = document.querySelector(`section[data-section-count="${i}"]`);
            sects.forEach(s => {if (target && s !== target) s.setAttribute('data-visible', 'none');});
            if (target) {
                c = i; T(() => {target.setAttribute('data-state', 'visible')}, 10); target.removeAttribute('data-visible');
            }
            return target;
        };
        function b() {
            const a = document.querySelector('section[data-state="visible"]');
                a.style.opacity = 0; T(() => {a.style.opacity = ""; a.setAttribute("data-state", "hidden")}, 1000);
        };
        function y() {
            sects.forEach(s => T(() => {s.setAttribute('data-animation', '')}, 900));
        };
        function P(e) {

        }
        tabs.forEach(a => {
            a.addEventListener('click', () => {
                const d = a.getAttribute('data-tab'); let n = d === 'scroll-up' ? c - 1 : c + 1; let k = s(n); b(); (k && d === 'scroll-up') ? T(() => k.setAttribute('data-animation', 'slide-from-top'), 0) : T(() => k.setAttribute('data-animation', 'slide-from-bottom'), 0); y();
            })
        });
    })()
})();