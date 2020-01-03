import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";
import { FAuthService } from "@app/_services/fauth.service";
// import { FAuthService } from "../_services/fauth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.less"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authService: FAuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(4), Validators.required]],
      aliases: this.fb.array([this.fb.control("")])
    });
  }

  get aliases() {
    return this.signupForm.get("aliases") as FormArray;
  }

  get name() {
    return this.signupForm.get("name");
  }

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }
  addAliases() {
    this.aliases.push(this.fb.control(""));
  }

  navigateToLogin() {
    this.router.navigate(["login"]);
  }

  signup() {
    return this.authService.emailSignup(this.email.value, this.password.value);
  }

  updateUser(user) {
    return this.authService.updateUser(user, {
      name: this.name.value,
      aliases: this.aliases.value
    });
  }
}
