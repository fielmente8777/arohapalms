"use client";
import { useWebContext } from "@/context-api/WebContext";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import {
  CalendarIcon,
  CallIcon,
  UserIcon,
  VilaIcon,
  WalletIcon,
} from "@/utils/formIcons";
import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";
import { WhatsAppIcon } from "../buttons/LinkButton";
import { usePathname } from "next/navigation";

interface Props {
  gridView?: boolean;
  /** Optional villa name to pre-select, e.g. "Villa Magnifica" */
  villa?: string;
}

// WhatsApp destination number
const WHATSAPP_NUMBER = "+919834220573";

/** Focus order used when validation fails — first match wins */
const FIELD_ORDER = ["name", "phone", "villa"] as const;

type VillaOption = {
  value: string;
  label: string;
};

// Villa options

const mandermLocationOptions: VillaOption[] = [
  {
    value: "4BHK, Aroha Palms Magnifica ",
    label: "4BHK, Aroha Palms Magnifica",
  },
  {
    value: "5BHK, Aroha Palms Paradiso ",
    label: "5BHK, Aroha Palms Paradiso ",
  },
  { value: "5BHK, Aroha Palms Serenity", label: "5BHK, Aroha Palms Serenity" },
  { value: "7BHK, Aroha Palms Caia ", label: "7BHK, Aroha Palms Caia " },
  { value: "9BHK, Aroha Palms Prana ", label: "9BHK, Aroha Palms Prana" },
  { value: "10BHK, Aroha Palms Encanto ", label: "10BHK, Aroha Palms Encanto" },
  { value: "18BHK, Aroha Palms Marisol ", label: "18BHK, Aroha Palms Marisol" },
];

const pilerneLocationOptions: VillaOption[] = [
  {
    value: "5BHK, Aroha Palms Villa Majestic ",
    label: "5BHK, Aroha Palms Villa Majestic",
  },
  {
    value: "6BHK, Aroha Palms Villa Grande ",
    label: "6BHK, Aroha Palms Villa Grande ",
  },
  {
    value: "11BHK, Aroha Palms Villa Imperial",
    label: "11BHK, Aroha Palms Villa Imperial",
  },
];

/**
 * Which villa list belongs to a route.
 * Takes the pathname as an argument (from usePathname) so nothing reads
 * window at module scope — that is what broke the server render.
 */
export const getLocationOptions = (pathname: string | null): VillaOption[] =>
  pathname === "/" ? mandermLocationOptions : pilerneLocationOptions;

const normalizeVillaName = (value: string) =>
  value
    .toLowerCase()
    .replace(/aroha palms|villa|\d+\s*bhk/g, "")
    .replace(/[^a-z]/g, "");

export const matchVillaOption = (
  input: string | null | undefined,
  options: VillaOption[],
) => {
  if (!input) return "";

  const target = normalizeVillaName(input);
  if (!target) return "";

  const matched = options.find((option) => {
    const current = normalizeVillaName(option.value);
    if (!current) return false;
    return (
      current === target || current.includes(target) || target.includes(current)
    );
  });

  // Return the exact option value so the dropdown selection matches
  return matched ? matched.value : "";
};

// Custom Dropdown Component
interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: VillaOption[];
  error?: string;
  className?: string;
}

/**
 * forwardRef so the parent can call .focus() on the inner input when
 * validation fails. Focusing it also opens the list (see onFocus below).
 */
const CustomDropdown = React.forwardRef<HTMLInputElement, CustomDropdownProps>(
  (
    {
      value,
      onChange,
      placeholder = "Preferred Location",
      options,
      error,
      className = "",
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Expose the inner input to the parent
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    // Filter options based on search term
    const filteredOptions = useMemo(() => {
      if (!searchTerm) return options;
      return options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }, [searchTerm, options]);

    // Get selected label
    const selectedLabel = useMemo(() => {
      const selected = options.find((opt) => opt.value === value);
      return selected ? selected.label : "";
    }, [value, options]);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle selection
    const handleSelect = (selectedValue: string) => {
      onChange(selectedValue);
      setIsOpen(false);
      setSearchTerm("");
    };

    return (
      <div ref={dropdownRef} className={`relative w-full ${className}`}>
        <div
          className="flex items-center justify-between w-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? searchTerm : selectedLabel}
            onChange={(e) => {
              if (!isOpen) setIsOpen(true);
              setSearchTerm(e.target.value);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full placeholder:text-secondarya focus:outline-none text-secondarya bg-transparent"
            aria-label="Location"
            aria-invalid={!!error}
          />
          <IoIosArrowDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="absolute z-50 -left-4 w-[110%] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors ${
                    value === option.value ? "bg-primary/10 text-primary" : ""
                  }`}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No locations found</div>
            )}
          </div>
        )}
        {/* {error && <p className="text-red-500 text-xs mt-1">{error}</p>} */}
      </div>
    );
  },
);

CustomDropdown.displayName = "CustomDropdown";

// Local (not UTC) yyyy-mm-dd so the date never shifts by a day
const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

interface WhatsappFormData {
  name: string;
  countryCode: string;
  phone: string;
  promoCode: string;
  villa: string;
  checkIn: string;
  checkOut: string;
}

const initialFormData: WhatsappFormData = {
  name: "",
  countryCode: "+91",
  phone: "",
  promoCode: "",
  villa: "",
  checkIn: "",
  checkOut: "",
};

// Builds the pre-filled WhatsApp message from the form data
export const buildWhatsappMessage = (data: WhatsappFormData) => {
  const lines: string[] = [
    "Hi Aroha Palms Team,",
    "",
    "I'm interested in booking a stay at Aroha Palms.",
    "",
  ];

  if (data.name) lines.push(`Name: ${data.name}`);
  if (data.phone) lines.push(`Phone: ${data.countryCode} ${data.phone}`);
  if (data.villa) lines.push(`Villa: ${data.villa.trim()}`);
  if (data.checkIn) lines.push(`Check-in: ${data.checkIn}`);
  if (data.checkOut) lines.push(`Check-out: ${data.checkOut}`);
  if (data.promoCode) lines.push(`Promo Code: ${data.promoCode}`);

  lines.push(
    "",
    "Please share the best available options and rates.",
    "",
    "Thank you!",
  );

  return encodeURIComponent(lines.join("\n"));
};

const WhatsappForm = ({ gridView, villa }: Props) => {
  const pathName = usePathname();

  // Route decides which villa list and which offer line to show
  const locationOptions = useMemo(
    () => getLocationOptions(pathName),
    [pathName],
  );

  const validDate =
    pathName === "/"
      ? "*Monsoon offer valid till 31st August"
      : "*Offer valid till 30th September";

  // Villa name carried in from whichever CTA opened the popup
  const { formVilla } = useWebContext();
  const prefillVilla = villa ?? formVilla;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  // Lazy initializer so a villa passed on first mount is already selected
  const [formData, setFormData] = useState<WhatsappFormData>(() => ({
    ...initialFormData,
    villa: matchVillaOption(prefillVilla, locationOptions),
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // One ref per focusable field, keyed by field name
  const fieldRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const registerField =
    (name: string) => (el: HTMLInputElement | null) => {
      fieldRefs.current[name] = el;
    };

  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const setFieldValue = (name: keyof WhatsappFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const [lastPrefill, setLastPrefill] = useState({
    villa: prefillVilla,
    options: locationOptions,
  });

  if (
    prefillVilla !== lastPrefill.villa ||
    locationOptions !== lastPrefill.options
  ) {
    const optionsChanged = locationOptions !== lastPrefill.options;
    setLastPrefill({ villa: prefillVilla, options: locationOptions });

    const matched = matchVillaOption(prefillVilla, locationOptions);

    if (matched) {
      setFormData((prev) => ({ ...prev, villa: matched }));
      setErrors((prev) => {
        if (!prev.villa) return prev;
        const next = { ...prev };
        delete next.villa;
        return next;
      });
    } else if (optionsChanged) {
      // Route changed and the old selection isn't in the new list — clear it
      setFormData((prev) =>
        locationOptions.some((option) => option.value === prev.villa)
          ? prev
          : { ...prev, villa: "" },
      );
    }
  }

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setFieldValue(e.target.name as keyof WhatsappFormData, e.target.value);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);

    setFieldValue("checkIn", start ? formatDate(start) : "");
    setFieldValue("checkOut", end ? formatDate(end) : "");
  };

  // Handle promo code change
  const handlePromoCodeChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setFieldValue("promoCode", e.target.value.toUpperCase());
  };

  // Handle villa change
  const handleVillaChange = (value: string) => {
    setFieldValue("villa", value);
  };

  /** Returns the error map so the caller can act on it immediately —
   *  setErrors is async and can't be read back in the same tick. */
  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name";

    const digits = formData.phone.replace(/\D/g, "");
    if (!digits) nextErrors.phone = "Please enter your phone number";
    else if (digits.length < 7) nextErrors.phone = "Enter a valid phone number";

    if (!formData.villa) nextErrors.villa = "Please select a villa";

    setErrors(nextErrors);
    return nextErrors;
  };

  /** Focus (and scroll to) the first field that failed, in FIELD_ORDER */
  const focusFirstError = (currentErrors: Record<string, string>) => {
    const firstInvalid = FIELD_ORDER.find((name) => currentErrors[name]);
    if (!firstInvalid) return;

    const el = fieldRefs.current[firstInvalid];
    if (!el) return;

    // preventScroll so the browser doesn't jump before our smooth scroll
    el.focus({ preventScroll: true });
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentErrors = validate();

    if (Object.keys(currentErrors).length > 0) {
      focusFirstError(currentErrors);
      return;
    }

    setIsSubmitting(true);

    const enCodeText = buildWhatsappMessage(formData);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${enCodeText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Keep the pre-selected villa after a reset if one was passed in
    setFormData({
      ...initialFormData,
      villa: matchVillaOption(prefillVilla, locationOptions),
    });
    setStartDate(null);
    setEndDate(null);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
    window.open("/thank-you/", "_blank");
  };

  type DropdownOption = {
    value: string;
    label: string;
  };

  type FormField =
    | {
        name: string;
        label: string;
        type: "text" | "tel" | "date";
        value: string;
        onChange: React.ChangeEventHandler<
          HTMLInputElement | HTMLTextAreaElement
        >;
        icon: React.ReactNode;
      }
    | {
        name: string;
        label: string;
        type: "dropdown";
        value: string;
        options: DropdownOption[];
        onChange: (value: string) => void;
        icon: React.ReactNode;
      };

  const formFields: FormField[] = [
    {
      name: "name",
      label: "Name*",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number*",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },

    {
      name: "villa",
      label: "Select Villa*",
      type: "dropdown",
      value: formData.villa,
      options: locationOptions,
      icon: <VilaIcon />,
      onChange: handleVillaChange,
    },
    {
      name: "checkIn",
      label: "Check-in & out*",
      type: "date",
      value: formData.checkIn,
      onChange: handleChange,
      icon: <CalendarIcon />,
    },
    {
      name: "promoCode",
      label: "Promo Code",
      type: "text",
      value: formData.promoCode,
      onChange: handlePromoCodeChange,
      icon: <WalletIcon />,
    },
  ];

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`${gridView ? "flex flex-col gap-3" : "grid md:grid-cols-6 items-start gap-3.5"} font-body px-4 bg-transparent max-md:divide-y divide-p1`}
      >
        {formFields.map((field, index) => (
          <React.Fragment key={index}>
            {field.type === "date" ? (
              <div
                className={`lg:bg-white flex items-center gap-2.5 lg:shadow  lg:rounded-lg ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"} ${errors[field.name] ? "border-red-500 border border-light/30" : ""}`}
              >
                <label className="text-p2">{field.icon}</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  minDate={minDate}
                  maxDate={maxDate}
                  placeholderText={field.label}
                  calendarClassName="!z-[99999]"
                  popperClassName="!z-[99999]"
                  className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya"
                  wrapperClassName="w-full h-full !flex items-center"
                />
              </div>
            ) : field.type === "dropdown" ? (
              <div
                className={`lg:bg-white flex items-center gap-2.5 lg:shadow  lg:rounded-lg ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"} ${errors[field.name] ? "border-red-500 border border-light/30" : ""}`}
              >
                <label className="text-p2">{field.icon}</label>
                <CustomDropdown
                  ref={registerField(field.name)}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={field.label}
                  options={field.options ?? []}
                  error={errors[field.name]}
                />
              </div>
            ) : field.type === "tel" ? (
              <div
                className={`flex lg:bg-white items-center gap-2.5 lg:shadow  lg:rounded-lg ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"} ${errors[field.name] ? "border-red-500 border border-light/30" : ""}`}
              >
                <label className="text-p2">{field.icon}</label>
                <div className="relative">
                  <select
                    className="ps-2 cursor-pointer border-p1 appearance-none w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFieldValue("countryCode", e.target.value)
                    }
                    style={{
                      width: `${(formData.countryCode || "+91").length * 2}ch`,
                    }}
                    aria-label="Country Code"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <IoIosArrowDown />
                  </span>
                </div>
                <input
                  ref={registerField(field.name)}
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!errors[field.name]}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <div
                  className={`flex lg:bg-white items-center gap-2.5 lg:shadow  lg:rounded-lg ${gridView ? "p-4" : "max-md:pb-4 max-md:pt-2 py-3 lg:px-2"} ${errors[field.name] ? "border-red-500 border border-light/30" : ""}`}
                >
                  <label className="text-p2">{field.icon}</label>
                  <input
                    ref={registerField(field.name)}
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!errors[field.name]}
                  />
                </div>
                {field.name === "promoCode" && (
                  <span className="text-xs text-gray-400">{validDate}</span>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
        <button
          type="submit"
          className="bg-primary text-white w-full rounded-lg lg:text-lg py-3 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Opening WhatsApp..."
          ) : submitSuccess ? (
            "Thank You!"
          ) : (
            <span className="flex items-center justify-center gap-2.5">
              <span>
                <WhatsAppIcon />
              </span>{" "}
              Enquire Now
            </span>
          )}
        </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <p className="text-red-500" role="alert">
          {/* {Object.values(errors).join(" ")} */}
          Please fill all the required fields
        </p>
      )}
    </div>
  );
};

export default WhatsappForm;