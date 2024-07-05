
precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 pixColor = texture2D(tex, v_texcoord);

    // gl_FragColor = vec4(0, pixColor.b, pixColor.b, pixColor.a);

    float g = (pixColor.r + pixColor.g + pixColor.b) / 3.0;
    float r = g*g;

    //gl_FragColor = vec4(0, g, 0, pixColor.a);

    
    if (true) { // (g > 0.4) {
        // cyan
        // gl_FragColor = vec4(0.4, 0.85, 0.94, pixColor.a);

        // gl_FragColor = vec4(1, 1, 1, pixColor.a);

        // nightmare
        gl_FragColor = vec4(g, r, r, pixColor.a);

        // invert
        // gl_FragColor = vec4(1.0 - pixColor.r, 1.0 - pixColor.g, 1.0 - pixColor.b, pixColor.a);
    } else {
        gl_FragColor = vec4(0, 0, 0, pixColor.a);
    }
    

}

