import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
    name: 'urlSanitizer'
})
export class URLSanitizerPipe implements PipeTransform {
   
    constructor(private sanitizer: DomSanitizer) {}
    
    transform(url: string): SafeUrl {
        return url ? this.sanitizer.bypassSecurityTrustUrl(url) : '';

      /* class DomSanitizer */
      // sanitize(context: SecurityContext, value: any) : string
      // bypassSecurityTrustHtml(value: string) : SafeHtml
      // bypassSecurityTrustStyle(value: string) : SafeStyle
      // bypassSecurityTrustScript(value: string) : SafeScript
      // bypassSecurityTrustUrl(value: string) : SafeUrl
      // bypassSecurityTrustResourceUrl(value: string) : SafeResourceUrl
    }
}
