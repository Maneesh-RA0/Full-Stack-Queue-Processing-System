import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import NumberSlider from "../../components/ui/NumberSlider";
import PasswordInput from "../../components/ui/PasswordInput";
import Card from "../../components/ui/Card";
import { useSecureField } from "../../hooks/useSecureField";
import { BotFormValues, botFormSchema } from "./validators";
import { submitBotConfig } from "../../services/api";
import { useJobSocket } from "../../hooks/useJobSocket";
import { useUIStore } from "../../stores/uiStore";

export default function BotForm() {
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [serverError, setServerError] = useState<string | null>(null);
    const { currentJobId, progress } = useUIStore();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting }
    } = useForm<BotFormValues>({
        resolver: zodResolver(botFormSchema),
        defaultValues: {
            instagramId: "",
            password: "",
            targetUser: "",
            followerCount: 2500
        },
        mode: "onBlur"
    });

    const followerCount = watch("followerCount");

    useSecureField(passwordRef);

    // subscribe to job socket when currentJobId changes
    useJobSocket(currentJobId);

    const onSubmit = async (values: BotFormValues) => {
        setServerError(null);

        try {
            const resp = await submitBotConfig(values);
            // resp.jobId is the job identifier to monitor
            if (resp.jobId) {
                // Store jobId in UI store; socket hook will subscribe
                const setCurrentJobId = useUIStore.getState().setCurrentJobId;
                setCurrentJobId(resp.jobId);
            }
        } catch (err: any) {
            setServerError(err?.message || "Unknown server error");
        }
    };

    const currentProgress = currentJobId ? progress[currentJobId] ?? 0 : 0;

    return (
        <Card className="mx-auto max-w-3xl p-5 sm:p-8">
            <div className="mb-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-stone-600 text-lg font-bold text-white shadow-lg">
                    IG
                </div>

                <h1 className="mt-5 text-3xl font-black tracking-[-0.05em] text-slate-900">
                    Configure Your Growth Bot
                </h1>

                <p className="mt-3 text-base text-slate-600">
                    Set your Instagram account and growth parameters below.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" noValidate>
                <section className="space-y-5 rounded-[24px] border border-slate-200 bg-white/50 p-5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">Authentication</h2>
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                            Secure
                        </span>
                    </div>

                    <Input
                        label="Instagram ID"
                        type="text"
                        autoComplete="username"
                        placeholder="username_or_email"
                        error={errors.instagramId?.message}
                        aria-invalid={Boolean(errors.instagramId)}
                        {...register("instagramId")}
                    />

                    <PasswordInput
                        label="Password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        error={errors.password?.message}
                        aria-invalid={Boolean(errors.password)}
                        {...register("password")}
                    />

                </section>

                <section className="space-y-6 rounded-[24px] border border-slate-200 bg-white/50 p-5">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Target & Quantity</h2>
                    </div>

                    <Input
                        label="Enter the Target Username"
                        type="text"
                        placeholder="e.g. brandname"
                        error={errors.targetUser?.message}
                        aria-invalid={Boolean(errors.targetUser)}
                        {...register("targetUser")}
                    />

                    <div className="space-y-3">
                        <NumberSlider
                            label="How many bot followers do you want to add?"
                            value={followerCount}
                            min={100}
                            max={50000}
                            step={100}
                            onChange={(value) => {
                                setValue("followerCount", value, {
                                    shouldValidate: true,
                                    shouldDirty: true
                                });
                            }}
                        />

                        {errors.followerCount && (
                            <p className="text-sm text-red-600">{errors.followerCount.message}</p>
                        )}
                    </div>
                </section>

                {serverError && <p className="text-sm text-red-600">{serverError}</p>}

                <div className="pt-2">
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting…" : "Launch Bot"}
                    </Button>
                </div>

                {currentJobId && (
                    <div className="mt-4 rounded-lg border border-slate-200 bg-white/60 p-4">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium text-slate-700">Job: {currentJobId}</div>
                            <div className="text-xs text-slate-500">{currentProgress}%</div>
                        </div>

                        <div className="mt-3 h-3 w-full rounded-full bg-slate-200">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300 transition-all"
                                style={{ width: `${currentProgress}%` }}
                            />
                        </div>
                    </div>
                )}
            </form>
        </Card>
    );
}