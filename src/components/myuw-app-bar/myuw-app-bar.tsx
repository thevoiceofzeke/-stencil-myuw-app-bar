import { Component, Prop, Element, Listen } from '@stencil/core';

@Component({
  tag: 'myuw-app-bar',
  styleUrl: 'myuw-app-bar.scss',
  shadow: true,
  host: {
      role: 'toolbar'
  }
})

export class MyuwAppBar {

    @Element() topBarElement: HTMLElement;
    @Prop() themeName: string;
    @Prop() themeUrl: string;
    @Prop() appName: string;
    @Prop() appUrl: string;
    @Prop() background: string;
    @Prop() color: string;
    @Prop({ mutable: true }) shadow: boolean = false;

    @Listen('window:scroll')
    handleScroll() {
        if (window.scrollY !== 0) {
            this.shadow = true;
            // this.topBarElement.style.boxShadow = '0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12)';
        } else {
            // this.topBarElement.style.boxShadow = 'none';
            this.shadow = false;
        }
    }
    
    setColors(backgroundColor: string, color: string) {
        // Set the element's colors
        this.topBarElement.style.backgroundColor = backgroundColor;
        this.topBarElement.style.color = color;
    }

    componentWillLoad() {
        this.setColors(this.background, this.color);
    }
  
    render() {
        return (
            <div class='myuw-app-bar'>
                <div class='region region__navigation'>
                    <slot name='myuw-navigation' />
                </div>
                <div class="title">
                    <h1>
                        {this.themeUrl
                            ? <a href={this.themeUrl} target='_self' rel='noopener noreferrer'>{this.themeName}</a>
                            : <span>{this.themeName}</span>
                        }
                        &nbsp;
                        {this.appUrl
                            ? <a href={this.appUrl} target='_self' rel='noopener noreferrer'>{this.appName}</a>
                            : <span>{this.appName}</span>
                        }
                    </h1>
                </div>
                <div class='region region__help'>
                    <slot name='myuw-help' />
                </div>
                <div class='region region__notifications'>
                    <slot name='myuw-notifications' />
                </div>
                <div class='region region__profile'>
                    <slot name='myuw-profile' />
                </div>
                {this.shadow 
                    ? <span class='myuw-box-shadow shadow'>&nbsp;</span> 
                    : <span class='myuw-box-shadow'>&nbsp;</span> }
            </div>
        );
    }
}

/*
    Append required font CDNs to document <head>
*/
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
`
document.head.appendChild($_documentContainer.content);