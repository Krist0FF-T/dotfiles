precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 c = texture2D(tex, v_texcoord);
    float g = (c.r + c.g + c.b) / 3.0;
    gl_FragColor = vec4(g, g, g, c.a);
}
