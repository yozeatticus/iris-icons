import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'my-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class Icon {
  @Prop() name: string;  // Nombre del icono (ej. 'home', 'user', etc.)
  @Prop() size: string = '24px';  // Tamaño del icono (opcional)
  @Prop() color: string = 'black';  // Color del icono (opcional)

  @State() svgContent: string;  // Estado para almacenar el contenido del SVG

  // Método para obtener el archivo SVG basado en el nombre del icono
  private async fetchIcon() {
    try {
      const response = await fetch(`/build/assets/icons/${this.name}.svg`);
      if (response.ok) {
        this.svgContent = await response.text();  // Obtener el contenido como texto
      } else {
        console.error('Error al cargar el icono:', response.statusText);
      }
    } catch (error) {
      console.error('Error al cargar el icono:', error);
    }
  }

  // Cargar el icono al iniciar el componente
  componentWillLoad() {
    this.fetchIcon();
  }

  render() {
    // Insertar el contenido del SVG directamente y aplicar el color con CSS
    return (
      <div
        style={{
          width: this.size,
          height: this.size,
          color: this.color,  // Aplica el color al SVG mediante `currentColor`
        }}
        innerHTML={this.svgContent}  // Inserta el contenido del SVG
      />
    );
  }
}
